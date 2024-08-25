<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import { string, object } from 'yup';
import * as Yup from 'yup';

const schema = object({
  email: string().email().required(),
  password: string().email().required(),
});

// Submit handler
const onSubmit = () => {
  alert('nice');
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

const onSubmitMeta = () => {
  alert(upperCase('nice'));
};
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form class="space-y-6" @submit="onSubmit" :validation-schema="schema">
          <div>
            <h1 class="my-4 block text-xl font-medium text-gray-700">
              Basic form
            </h1>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <Field
                name="email"
                type="email"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="email" class="my-2 text-red-800" />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div class="mt-1">
              <Field
                name="password"
                type="password"
                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage name="password" class="my-2 text-red-800" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </Form>

        <Form
          class="space-y-6"
          @submit="onSubmitMeta"
          :validation-schema="validationSchema"
          v-slot="{ meta, isSubmitting }"
        >
          <div>
            <h1 class="my-4 block text-xl font-medium text-gray-700">
              Meta and Field Interactions Form
            </h1>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div class="mt-1">
              <Field name="email" v-slot="{ meta, field }">
                <input
                  v-bind="field"
                  type="email"
                  :class="{
                    'border-red-500 bg-red-200': meta.touched && !meta.valid,
                    'border-green-500 bg-green-200':
                      !meta.touched || meta.valid,
                  }"
                  class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                />
              </Field>
              <ErrorMessage name="email" class="my-2 text-red-800" />
            </div>
          </div>

          <div>
            <!-- :disabled="isSubmitting" disabled if it is submitting  -->
            <!-- :disabled="!meta.valid" disabled if inputs are invalid  -->
            <!-- :disabled="!meta.dirty" disabled if valus did not change  -->
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>
