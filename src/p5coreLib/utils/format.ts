import moment from "moment";
import numeral from "numeral";
import "moment/locale/de";
// import "moment/locale/de-at";
// import "moment/locale/en-gb"; // => komisch, wenn dies nicht auskommentiert ist, wird immer auf "en" umgestellt :(
import "numeral/locales/de";
import "numeral/locales/en-gb";
import globals from "../../p5Lib/globals";

numeral.locale(globals.numeralLocale);

export function customDate(props: any) {
  return moment(props).format("L");
}

export function customCurrency(props: any) {
  return numeral(props).format("0,0.00 $");
}

export function customPercent(props: any) {
  return numeral(props).format("0,0.00") + " %";
}

export function customNumber(props: any) {
  return numeral(props).format("0.00");
}

export function customCurrencyNoDecimal(props: any) {
  return numeral(props).format("0,0 $");
}

export function customRoundCurreny(props: any) {
  const round = Math.round(props);
  return numeral(round).format("0,0 $");
}
