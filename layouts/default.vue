<template>
  <div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
    <div class="fixed bottom-[5vh] right-[5vw] flex justify-end items-center gap-2 px-4">
      <LangSwitcher />
      <!-- <ThemeSwitcher /> -->
    </div>
    <div class="flex w-full max-w-sm flex-col gap-6">
      <a href="#" class="flex items-center gap-2 self-center font-medium text-xl">
        <img width="50" src="/logo.png" alt="" />
        Onson Mail Group
      </a>
      <div class="flex flex-col gap-6">
        <Card>
          <CardHeader class="text-center">
            <CardTitle class="text-xl mt-3">
              {{ $t("Добро пожаловать") }}
            </CardTitle>
            <!-- <CardDescription>
          Login with your Apple or Google account
        </CardDescription> -->
          </CardHeader>
          <CardContent>
            <div class="grid gap-6">
              <div class="flex flex-col gap-4">
                <TelegramAuthButton />
                <GoogleAuthButton />
              </div>
              <div
                class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span class="relative z-10 px-2 text-muted-foreground">
                  {{ $t('или продолжить с') }}
                </span>
              </div>
              <div class="grid gap-6">
                <NuxtPage />
              </div>
            </div>
          </CardContent>
        </Card>
        <div
          class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          Нажимая продолжить, вы соглашаетесь с нашими <a href="#">Условиями использования</a>.
          и <a href="#">Политика конфиденциальности</a>.
        </div>
      </div>
    </div>
  </div>
</template>