<script>
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from '@/components/ui/pin-input'
import { token } from '~/composables'

export default {
    name: 'OTPForm',
    props: ['phone'],
    components: {PinInput, PinInputGroup, PinInputInput},
    data() {
        return {
            next: false,
            user: {},
            otp: null,
        }
    },
    methods: {
        async handleComplete(e) {
            const {data} = await this.$api.post('/oauth/opt-verify/', {phone: this.phone, opt: e.join('')})
            this.user = data.user
            token.value.access = data.access
            token.value.refresh = data.refresh
            this.next = true
        }
    }
}
</script>

<template>
    <div v-if="!next" class="flex justify-center items-center flex-col">
    <PinInput
      id="pin-input"
      v-model="otp"
      placeholder="○"
      @complete="handleComplete"
    >
      <PinInputGroup>
        <PinInputInput
          v-for="(id, index) in 4"
          :key="id"
          :index="index"
        />
      </PinInputGroup>
    </PinInput>
    <p class="text-sm p-4 text-center">{{ $t('На ваш номер телефона поступил 5-значный код подтверждения.') }}</p>
  </div>
    <slot v-else :disabled="disabled" :user="user" />
</template>