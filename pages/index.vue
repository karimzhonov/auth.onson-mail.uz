<script>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { token } from "@/composables"
import { redirect } from '~/lib/utils';
import { useRoute } from 'vue-router';

export default {
  name: 'Login',
  data() {
    return {
      formSchema: toTypedSchema(z.object({
        phone: z.string().min(9),
        password: z.string().min(4),
      }))
    }
  },
  methods: {
    async onSubmit(values) {
      const r = await this.$api.post('/oauth/', values)
      token.value = r?.data
      redirect()
    }
  },
  computed: {
    sign_up_url() {
      let url = useLocalePath()('/sign-up')
      if (useRoute().query.next) {
        url = `${url}?next=${useRoute().query.next}`
      }
      return url
    }
  }
}

</script>

<template>
  <Form :validation-schema="formSchema" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="phone">
      <FormItem v-auto-animate>
        <FormLabel>{{ $t('Номер телефон') }}</FormLabel>
        <FormControl>
          <Input type="text" placeholder="+998000000000" v-bind="componentField" required />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="password">
      <FormItem v-auto-animate>
        <FormLabel class="flex justify-between mt-5">
          {{ $t('Пароль') }}
          <a :href="sign_up_url" class="ml-auto text-sm underline-offset-4 hover:underline">
            {{ $t('Забыли пароль?') }}
          </a>
        </FormLabel>
        <FormControl>
          <Input type="password" :placeholder="$t('Пароль')" v-bind="componentField" required />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit" class="w-full mt-3">
      {{ $t('Авторизоваться') }}
    </Button>
  </Form>
  <div class="text-center text-sm mt-3">
    {{ $t('У вас нет учетной записи?') }}
    <a :href="sign_up_url" class="underline underline-offset-4">
      {{ $t('Зарегистрироваться') }}
    </a>
  </div>
</template>
