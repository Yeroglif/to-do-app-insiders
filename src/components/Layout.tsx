type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const header = (
    <div>
      <button onClick={() => {}}>ToDo-Insiders</button>
    </div>
  );
  const footer = (
    <div>
      <p>
        App created by <a target="_blank" href="https://github.com/Yeroglif/">Yeroglif</a>
      </p>
    </div>
  );
  return (
    <div>
      {header}
      {children}
      {footer}
    </div>
  );
}
