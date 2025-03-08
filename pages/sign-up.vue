<script>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { redirect } from '~/lib/utils';

export default {
  name: 'SignUp',
  data() {
    return {
      formSchema: toTypedSchema(z.object({
        first_name: z.string().min(4),
        second_name: z.string().min(4),
        password1: z.string().min(4),
        password2: z.string().min(4),
      }))
    }
  },
  methods: {
    async onSubmit(values) {
      await this.$api.patch('/oauth/account/', values)
      redirect()
    }
  }
}
</script>

<template>
  <PhoneForm>
    <template v-slot="{ phone }">
      <OTPForm :phone="phone">
        <template v-slot="{ user }">
          <Form :initialValues="user" :validation-schema="formSchema" @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="first_name">
              <FormItem v-auto-animate>
                <FormLabel>{{ $t('Имя') }}</FormLabel>
                <FormControl>
                  <Input type="text" :placeholder="$t('Имя')" v-bind="componentField" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="last_name">
              <FormItem v-auto-animate>
                <FormLabel>{{ $t('Фамилия') }}</FormLabel>
                <FormControl>
                  <Input type="text" :placeholder="$t('Фамилия')" v-bind="componentField" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="password1">
              <FormItem v-auto-animate>
                <FormLabel class="flex justify-between mt-5">
                  {{ $t('Пароль') }}
                </FormLabel>
                <FormControl>
                  <Input type="password" :placeholder="$t('Пароль')" v-bind="componentField" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="password2">
              <FormItem v-auto-animate>
                <FormLabel class="flex justify-between mt-5">
                  {{ $t('Подтвердите пароль') }}
                </FormLabel>
                <FormControl>
                  <Input type="password" :placeholder="$t('Подтвердите пароль')" v-bind="componentField" required />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <Button @click="onSubmit" type="submit" class="w-full mt-3">
              {{ $t('Подтвердить') }}
            </Button>
          </Form>
        </template>
      </OTPForm>
    </template>
  </PhoneForm>
  <div class="text-center text-sm mt-3">
    {{ $t('У вас уже есть учетной записи?') }}
    <a :href="useLocalePath()('/')" class="underline underline-offset-4">
      {{ $t('Авторизоваться') }}
    </a>
  </div>
</template>
