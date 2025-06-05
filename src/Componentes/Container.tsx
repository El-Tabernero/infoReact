type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="containerGeneral">{children}</div>;
};

export default Container;