import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const myToast = MySwal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  customClass: {
    container: 'my-swal',
    timerProgressBar: 'bg-main',
  },
  timer: 1500,
  timerProgressBar: true,
  background: '#F8F9FC',
  color: '#000000',
  showClass: {
    popup: 'animate__animated animate__fadeInDown',
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp',
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', MySwal.stopTimer)
    toast.addEventListener('mouseleave', MySwal.resumeTimer)
  },
})

export default myToast
