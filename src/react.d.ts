declare namespace React {
  type PropsWithChildren = import("react").PropsWithChildren;

  type PropsWithChildrenClassName<T = unknown> = PropsWithChildren<
    {
      className?: string;
    } & T
  >;
}
