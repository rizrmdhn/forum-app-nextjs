import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const myToast = MySwal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  customClass: {
    timerProgressBar: 'bg-light'
  },
  timer: 1500,
  timerProgressBar: true,
  background: '#323232',
  color: '#fff',
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
