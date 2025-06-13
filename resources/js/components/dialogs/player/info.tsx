import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Player } from '@/types';
import * as React from 'react';

interface PlayerDialogProps {
    player: Player;
}

export default function DialogPlayerInfo({ player }: PlayerDialogProps) {
    const [infoOpen, setInfoOpen] = React.useState<boolean>(false);

    console.log(player)

    const getMainCharacter = () => {
        // player.main = player?.characters?.filter( (character) => character.is_main )[0].character;
        return player?.characters[0]
    }

    if(infoOpen) {
        console.log(player)
        console.log(getMainCharacter());
    }


    return (
        <Dialog open={ infoOpen } onOpenChange={ setInfoOpen }>
            <DialogTrigger asChild>
                <p className="cursor-pointer">{ player.name }</p>
            </DialogTrigger>

            <DialogContent className="overflow-auto rounded-lg p-6 shadow-lg w-7xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Player: {player.name}</DialogTitle>
                </DialogHeader>

                <DialogDescription></DialogDescription>

                <div className="grid grid-cols-2 gap-4">
                    
                    <div className='flex space-x-4 col-span-2'>
                        <p>Main Character</p>
                        <p>{ getMainCharacter().name }</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Wins</p>
                        <p>0</p>

                        <p>Loses</p>
                        <p>0</p>
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Best matchup</p>
                        <p>0</p>

                        <p>Worst matchup</p>
                        <p>0</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
