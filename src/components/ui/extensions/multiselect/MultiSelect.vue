<script setup lang="ts">
import { ref } from 'vue'
import { Command, CommandGroup, CommandItem } from '../../command'
import { Popover, PopoverContent, PopoverTrigger } from '../../popover'
import { Button } from '../../button'
import { Check, ChevronDown } from 'lucide-vue-next'

const props = defineProps({
  options: { type: Array<string>, required: true },
  selected: { type: Array<string>, required: false }
})

const emits = defineEmits(['select'])

const open = ref(false)

function onSelect(option: string) {
  emits('select', option)
  open.value = false
}
</script>

<template>
  <Popover v-model:open="open">
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        role="combobox"
        :aria-expanded="open"
        class="min-w-[50%] justify-between"
      >
        <div v-if="selected">
          <span class="mr-1 font-normal" v-for="(program, i) of selected" :key="program"
            >{{ program }}{{ i === selected.length - 1 ? '' : ',' }}
          </span>
        </div>
        <ChevronDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>
    </PopoverTrigger>
    <PopoverContent class="min-w-[50%] p-0">
      <Command>
        <CommandGroup>
          <CommandItem
            v-for="option in props.options"
            :key="option"
            :value="option"
            @select="() => onSelect(option)"
          >
            <div class="flex">
              <div class="min-w-[25px]">
                <Check v-if="props.selected?.includes(option)" class="mr-1 h-4 w-4" />
              </div>
              <div class="flex-grow">
                <span>{{ option }}</span>
              </div>
            </div>
          </CommandItem>
        </CommandGroup>
      </Command>
    </PopoverContent>
  </Popover>
</template>
