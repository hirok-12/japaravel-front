import { useToast } from "vue-toastification";

export function useNotify() {
  const toast = useToast();

  // 成功
  const successToaste = (msg: string) => {
    toast.success(msg, {
      timeout: 2000,
      hideProgressBar: true
    });
  };

  // エラー
  const errorToaste = (msg: string) => {
    toast.error(msg, {
      timeout: 2000,
      hideProgressBar: true
    });
  };

  // 警告
  const warningToaste = (msg: string) => {
    toast.warning(msg, {
      timeout: 2000,
      hideProgressBar: true
    });
  };

  // 情報
  const infoToaste = (msg: string) => {
    toast.info(msg, {
      timeout: 2000,
      hideProgressBar: true
    });
  };

  return {
    successToaste,
    errorToaste,
    warningToaste,
    infoToaste
  };
}