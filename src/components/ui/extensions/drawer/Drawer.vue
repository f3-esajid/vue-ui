<template>
  <div class="flex">
    <div class="flex">
      <slot name="leftMenu" />
    </div>
    <div class="flex w-full h-full">
      <slot name="content" />
    </div>
  </div>
</template>
