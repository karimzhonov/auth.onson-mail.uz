<template>
    <TelegramLoginWidget mode="callback" telegram-login="onson_mail_bot"
        requestAccess="write" size="large" class="flex justify-center" 
        @callback="telegramCallback"/>
</template>
<script>
import { token } from "@/composables"
import { redirect } from '~/lib/utils'

export default {
  methods: {
    async telegramCallback(data) {
      const r = await this.$api.post('/oauth/telegram/', data)
      token.value = r?.data
      redirect()
    }
  }
}
</script>