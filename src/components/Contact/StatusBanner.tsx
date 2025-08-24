type StatusType = 'success' | 'error' | 'info';

export default function StatusBanner({ type = 'info', message }: { type?: StatusType; message: string }) {
  if (!message) return null;
  const styles = {
    success: 'bg-green-50 text-green-800 border-green-200',
    error: 'bg-red-50 text-red-800 border-red-200',
    info: 'bg-blue-50 text-blue-800 border-blue-200',
  } as const;

  const icon = {
    success: '✅',
    error: '⚠️',
    info: 'ℹ️',
  }[type];

  return (
    <div className={`w-full rounded-lg border px-4 py-3 my-2 ${styles[type]}`} role="status" aria-live="polite">
      <div className="flex items-start gap-3">
        <span className="text-xl leading-none">{icon}</span>
        <p className="text-sm md:text-base font-medium">{message}</p>
      </div>
    </div>
  );
}
