export default function Tabs({ children, ButtonsContainer = "menu", buttons }) {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
