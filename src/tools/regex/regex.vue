<script setup lang="ts">
import { stringify as stringifyToml } from 'iarna-toml-esm';
import { parse as parseYaml } from 'yaml';
import { withDefaultOnError } from '../../utils/defaults';
import type { UseValidationRule } from '@/composable/validation';
// import  from './content.md'
import content from './content.js'
const convertYamlToToml = (value: string) => [stringifyToml(parseYaml(value))].flat().join('\n').trim();

const transformer = (value: string) => value.trim() === '' ? '' : withDefaultOnError(() => convertYamlToToml(value), '');

const rules: UseValidationRule<string>[] = [
  {
    validator: (v: string) => v === '' || parseYaml(v),
    message: 'Provided JSON is not valid.',
  },
];
const contentHTML = content;
</script>
<template>
  <div v-html="contentHTML"></div>
</template>
