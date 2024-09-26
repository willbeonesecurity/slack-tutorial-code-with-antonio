import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";

export const CreateWorkspaceModal = () => {
    const [open, setOpen] = useCreateWorkspaceModal();

    const handleClose = () => {
        setOpen(false);
        // TODO: Clear form
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add A Workspace</DialogTitle>
                </DialogHeader>
                <form className="space-y-4">
                 <Input 
                 value=""
                 disabled={false}
                 required
                 autoFocus
                 minLength={3}
                 placeholder="Workspace Name eg 'Work', 'Home', 'Personal'"
                 />
                 <div className="flex justify-end">
                    <Button disabled={false}>
                        Create
                        </Button>
                 </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
    