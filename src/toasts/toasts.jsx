import { toast } from "react-toastify";
export function warningNotify() {
  toast.warn(
    "Just use  joe@example.com as Username and Password1 as password;",
    {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );
}
export function SuccessNotify(name) {
  toast.success(`Welcome ${name}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
export function SuccessLogOut() {
  toast.success(`Logged out successfully.`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
