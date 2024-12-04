<script setup lang="ts">
import { Table, TableHeader, TableRow, TableBody, TableCell } from '../table'

// Inspired Quasar q-table
type ColumnDef = {
  // unique id
  // identifies column
  // (used by pagination.sortBy, "body-cell-[name]" slot, ...)
  name: string

  // label for header
  label: string

  // row Object property to determine value for this column
  // OR field: row => row.some.nested.prop
  field: string

  // (optional) alignment
  align?: 'left' | 'center' | 'right'

  format?: (arg0: any) => string

  // body td:
  bodyStyle?: string
  bodyClasses?: string

  // header th:
  headerStyle?: string
  headerClasses?: string
}

withDefaults(
  defineProps<{
    columns: ColumnDef[]
    rows: any[]
    rowKey?: string
    hideHeader?: boolean
  }>(),
  {
    rowKey: 'id',
    hideHeader: false
  }
)

const emits = defineEmits<{
  (e: 'row-click', arg0: any): void
}>()
</script>
<template>
  <Table>
    <TableHeader v-if="!hideHeader">
      <slot name="header">
        <TableRow>
          <template v-for="col in columns" :key="col.name" :col="col">
            <slot :name="`header-cell-${col.name}`">
              <TableCell :style="col.headerStyle || ''" :class="col.headerClasses || ''">
                {{ col.label }}
              </TableCell>
            </slot>
          </template>
        </TableRow>
      </slot>
    </TableHeader>
    <TableBody>
      <template v-if="rows.length">
        <template v-for="row in rows" :key="row[rowKey]">
          <slot name="body-row" :row="row">
            <TableRow @click="emits('row-click', row)">
              <template v-for="col in columns" :key="col.name">
                <slot :name="`body-cell-${col.name}`" :row="row">
                  <TableCell :style="col.bodyStyle || ''" :class="col.bodyClasses || ''">
                    <template v-if="col.format">
                      {{ col.format(row) }}
                    </template>
                    <template v-else>
                      {{ row[col.field] }}
                    </template>
                  </TableCell>
                </slot>
              </template>
            </TableRow>
          </slot>
        </template>
      </template>
      <template v-else>
        <slot name="no-data">
          <TableRow>
            <TableCell :colspan="columns.length" class="h-24 text-center"> No results. </TableCell>
          </TableRow>
        </slot>
      </template>
    </TableBody>
  </Table>
</template>
