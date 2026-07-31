import { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [cursorType, setCursorType] = useState('');
  const [label, setLabel] = useState('');

  useEffect(() => {
    // Enable cursor class on body
    document.body.classList.add('has-cursor');

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Check hovered element
      const target = document.elementFromPoint(e.clientX, e.clientY);
      if (target) {
        const cursorAttr = target.closest('[data-cursor]')?.getAttribute('data-cursor');
        const isInteractive = target.closest('a, button, input, textarea, label, [role="button"]');
        
        if (cursorAttr) {
          setCursorType('hover');
          setLabel(cursorAttr);
        } else if (isInteractive) {
          setCursorType('hover');
          setLabel('');
        } else {
          setCursorType('');
          setLabel('');
        }
      }
    };

    const handleMouseDown = () => setCursorType((prev) => (prev.includes('hover') ? 'hover is-down' : 'is-down'));
    const handleMouseUp = () => setCursorType((prev) => prev.replace('is-down', '').trim());
    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('has-cursor');
    };
  }, [visible]);

  return (
    <div
      className={`cursor ${visible ? 'is-visible' : 'is-out'} ${cursorType} ${label ? 'has-label' : ''}`}
      aria-hidden="true"
    >
      <div
        className="cursor__dot"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)` }}
      />
      <div
        className="cursor__ring"
        style={{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)` }}
      />
      {label && (
        <div
          className="cursor__label"
          style={{ transform: `translate3d(${pos.x + 16}px, ${pos.y + 16}px, 0)` }}
        >
          {label}
        </div>
      )}
    </div>
  );
}
