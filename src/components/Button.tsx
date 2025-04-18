type Props = React.ComponentProps<"button"> & {
  isLoading?: boolean;
};

export function Button({
  children,
  isLoading,
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      className="flex items-center justify-center h-12 bg-green-100 rounded-lg text-white cursor-pointer hover:not-disabled:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-not-allowed"
      type={type}
      disabled={isLoading}
      {...rest}
    >
      {children}
    </button>
  );
}
