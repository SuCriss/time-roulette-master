import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import enLocale from './en'
import zhLocale from './zh'
import zwLocale from './zw'

Vue.use(VueI18n);

const messages ={
    en:{
        ...enLocale
    },
    zh:{
        ...zhLocale
    },
    zw:{
        ...zwLocale
    }
}

export function getLang() {
    const selectLang = Cookies.get('language');
    if(selectLang) return selectLang;

    const language =(
        navigator.language ||navigator.browserLanguage
    ).toLowerCase();
    const locales = Object.keys(messages);
    console.log(language);
    for(const locale of locales){
        if(language.indexOf(locale)>-1){
            return locale
        }
    }
    return "en"
}

const  i18n = new VueI18n({
    locale:getLang(),
    messages
});
export default i18n;
