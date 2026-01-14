import {useNavigate} from 'react-router'
import {useRef} from 'react'

const Graphic = () => {
  const navigate = useNavigate();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
  };

  const handleTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX.current;
    const dy = t.clientY - touchStartY.current;

    // swipe kiri -> balik ke kalkulator normal
    if (dx > 60 && Math.abs(dy) < 40) {
      navigate("/convert");
    }
  };
  return (
    <div className='w-full h-screen'>Coming Soon</div>
  )
}

export default Graphic