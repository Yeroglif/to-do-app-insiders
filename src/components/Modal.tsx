import ReactDom from 'react-dom';

type ModalProps = {
  children: React.ReactNode;
  handleCloseModal?: () => void;
};

export default function Modal({ children, handleCloseModal }: ModalProps) {
  const portalElement = document.getElementById('portal');

  if (!portalElement) return null;

  return ReactDom.createPortal(
    <div className="modal-container">
      <button onClick={handleCloseModal} className="modal-underlay" />
      <div className="model-content">{children}</div>
    </div>,
    portalElement
  );
}

{/* <div className="fixed top-0 left-0 height-100vh width-100vw flex flex-col align-center justify-center z-100 p-1rem">
      <button onClick={handleCloseModal} className="absolute inset-0 bg-muted opacity-80 z-[99] w-full shadow-none hover:translate-x-0 hover:shadow-none" />
      <div className="relative z-[101] max-w-[600px] w-full mx-auto min-h-[400px] rounded-lg border border-primary bg-primary p-4 flex flex-col gap-4">{children}</div> */}
