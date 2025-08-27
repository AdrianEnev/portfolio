type StatusType = 'success' | 'error' | 'info';

export default function StatusBanner({ type = 'info', message }: { type?: StatusType; message: string }) {
  if (!message) return null;
  const styles = {
    success: 'text-green-700',
    error: 'text-red-700',
    info: 'text-blue-700',
  } as const;

  const icon = {
    success: '✅',
    error: '⚠️',
    info: 'ℹ️',
  }[type];

  return (
    <div className={`w-full`} role="status" aria-live="polite">
      <div className={`flex items-start gap-2 ${styles[type]}`}>
        <span className="text-lg leading-none">{icon}</span>
        <p className="text-sm md:text-base font-medium">{message}</p>
      </div>
    </div>
  );
}
