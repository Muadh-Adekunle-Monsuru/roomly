import { create } from 'zustand';

interface RegistarModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

const useRegisterModal = create<RegistarModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));

export default useRegisterModal;
