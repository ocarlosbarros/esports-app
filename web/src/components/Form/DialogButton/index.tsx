import * as Dialog from '@radix-ui/react-dialog';
import { MagnifyingGlassPlus } from 'phosphor-react';

function DialogButton(){
    return (
    <Dialog.DialogTrigger className="py-3 px-4 bg-violet-500 text-white rounded hover:bg-violet-600 flex items-center gap-3">
              < MagnifyingGlassPlus size={ 24 }/>
              Publicar Anúncio
    </Dialog.DialogTrigger>
    )
}

export default DialogButton;