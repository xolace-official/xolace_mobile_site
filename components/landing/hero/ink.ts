// Theme-aware inks for a colour set as --k on the element. The bright tokens (accent, chart-3,
// chart-5) wash out on the light background, so light mode keeps each hue but drops its lightness.
// Relative colour syntax, not color-mix toward the foreground, which drags hues round the wheel.
export const INK = {
  text: "text-[color:oklch(from_var(--k)_0.56_c_h)] dark:text-(--k)",
  label: "text-[color:oklch(from_var(--k)_0.5_c_h)] dark:text-(--k)",
  border:
    "border-[color:oklch(from_var(--k)_0.6_c_h_/_0.5)] dark:border-[color:oklch(from_var(--k)_l_c_h_/_0.45)]",
  bg: "bg-[color:oklch(from_var(--k)_l_c_h_/_0.2)] dark:bg-[color:oklch(from_var(--k)_l_c_h_/_0.18)]",
  stroke: "stroke-[color:oklch(from_var(--k)_0.6_c_h)] dark:stroke-(--k)",
}

export const inkVar = (color: string) =>
  ({ "--k": color }) as React.CSSProperties
