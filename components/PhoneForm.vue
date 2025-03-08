<template>
    <Form v-if="!next" :validation-schema="formSchema" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="phone">
            <FormItem v-auto-animate>
                <FormLabel>{{ $t('Номер телефон') }}</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="+998000000000" v-bind="componentField" required />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>

        <Button type="submit" class="w-full mt-3">
            {{ $t('Подтвердите телефон') }}
        </Button>
    </Form>
    <slot v-else :phone="phone" />
</template>
<script>
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export default {
    name: 'PhoneForm',
    data() {
        return {
            formSchema: toTypedSchema(z.object({
                phone: z.string().min(9),
            })),
            next: false,
            phone: null,
        }
    },
    methods: {
        async onSubmit(values) {
            await this.$api.post("/oauth/opt/", values)
            this.phone = values.phone
            this.next = true
        }
    }
}
</script>