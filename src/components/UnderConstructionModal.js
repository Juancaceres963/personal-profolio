import * as Dialog from "@radix-ui/react-dialog";
import "../App.css";
import { X } from "lucide-react";

const UnderConstructionModal = () => {
  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className="modal-overlay" />
        <Dialog.Content className="modal-content">
          <Dialog.Title className="modal-title">
            🚧 Página en construcción 🚧
          </Dialog.Title>
          <Dialog.Description className="modal-description">
            Estamos trabajando en esta sección. ¡Vuelve pronto! 🚀
          </Dialog.Description>
          <Dialog.Close asChild>
            <button className="modal-close">
              <X className="icon-close" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default UnderConstructionModal;