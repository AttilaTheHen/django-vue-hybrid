<template>
    <div class="bg-white">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">Demo</h2>
        <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">{{title}}</p>
        <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">Using Django, Vue and Vite together.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoComponent',
  props: {
    title: {
      type: String,
      default: 'A fancy title',
    },
  },
};
</script>
