
import { localize, setLocale } from "@vee-validate/i18n";
// VeeValidateで用意されている英語語版入力チェックエラーメッセージを使う
import en from "@vee-validate/i18n/dist/locale/en.json";
// VeeValidateで用意されている日本語版入力チェックエラーメッセージを使う
import ja from "@vee-validate/i18n/dist/locale/ja.json";
import AllRules from "@vee-validate/rules";
import { defineRule, configure } from "vee-validate";
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((_nuxtApp) => {
  configure({
    generateMessage: localize({
      en,
      ja
    }),
  });

  configure({
    generateMessage: localize('ja', {
      names: {
        password: 'パスワード',
        email: 'Email'
      },
    }),
  });


  Object.keys(AllRules).forEach((rule) => {
    defineRule(rule, AllRules[rule]); // 全ルールを使えるようにする
  });

  setLocale("ja");
});