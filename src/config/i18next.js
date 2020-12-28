import i18next from "i18next";
import global_es from "./translation/es/global.json";
import global_en from "./translation/en/global.json";

i18next.init({
    interpolation:{escapeValue:false},
    lng:"es",
    resources:{
      es: {
        global:global_es
      },
      en:{
        global:global_en
      }
    }
  });
  