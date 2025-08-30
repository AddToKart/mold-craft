import { cn } from "@/lib/utils";
import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
  return (
    <h1 className={cn("heading-xl text-slate-900 font-heading", className)}>
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className }: TypographyProps) {
  return (
    <h2 className={cn("heading-lg text-slate-900 font-heading", className)}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className }: TypographyProps) {
  return (
    <h3 className={cn("heading-md text-slate-900 font-heading", className)}>
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className }: TypographyProps) {
  return (
    <h4 className={cn("heading-sm text-slate-900 font-heading", className)}>
      {children}
    </h4>
  );
}

export function TypographyP({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-lg leading-relaxed text-slate-600 font-body",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyLead({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-xl text-slate-600 font-body leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
}

export function TypographyMuted({ children, className }: TypographyProps) {
  return (
    <p className={cn("text-sm text-slate-500 font-body", className)}>
      {children}
    </p>
  );
}
