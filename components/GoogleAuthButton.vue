<template>
    <a :href="url" class="flex px-4 py-2 border rounded-[20px] bg-white w-fit mx-auto">
        <img src="/icons/google.webp" width="24" class="mr-[13px]" />
        {{ $t('Войти через Google') }}
    </a>
</template>
<script>
import { token } from "@/composables"
import { redirect } from '~/lib/utils'

export default {
    async mounted() {
        const parsedHash = new URLSearchParams(
            window.location.hash.substring(1) // any_hash_key=any_value
        );

        if (parsedHash.get("access_token")) {
            const r = await this.$api.post('/oauth/google_auth/', {access_token: parsedHash.get("access_token")})
            token.value = r?.data
            redirect()
        }
    },
    computed: {
        url() {
            const google_client_id = "806119415714-fue38l8s03odd4h5bgbr8o0c4qg4v4uu.apps.googleusercontent.com"
            const google_callback_uri = window.location.origin
            const url = "https://accounts.google.com/o/oauth2/v2/auth"
            var params = {'client_id': google_client_id,
                'redirect_uri': google_callback_uri,
                'response_type': 'token',
                'scope': 'https://www.googleapis.com/auth/userinfo.profile',
                'include_granted_scopes': 'true',
                'state': 'pass-through value'
            };
            const search = new URLSearchParams(params)
            return `${url}?${search}`
        }
    }
}
</script>