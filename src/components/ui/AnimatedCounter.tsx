import { useCountUp } from '../../hooks/useCountUp';

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ end, suffix = '', duration = 2000, className = '' }: AnimatedCounterProps) {
  const { count, ref } = useCountUp(end, duration);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
