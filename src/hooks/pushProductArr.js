import { ref } from '@vue/reactivity';

export default function pushProductArr(maxItems) {
  const onClickProductArr = ref("")

  const pushProductToArr = (e) => {
    if (onClickProductArr.value.length < maxItems) {
      onClickProductArr.value = [
        ...onClickProductArr.value,
        e.target.textContent,
      ];
    }
  }

  return {
    onClickProductArr,
    pushProductToArr
  }
}
