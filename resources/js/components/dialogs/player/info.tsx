import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Player } from '@/types';
import { Info } from 'lucide-react';
import * as React from 'react';

interface PlayerDialogProps {
    player: Player;
}

export default function DialogPlayerInfo({ player }: PlayerDialogProps) {
    const [infoOpen, setInfoOpen] = React.useState<boolean>(false);

    return (
        <Dialog open={ infoOpen } onOpenChange={ setInfoOpen }>
            <DialogTrigger asChild>
                <Info />
            </DialogTrigger>

            <DialogContent className="overflow-auto rounded-lg p-6 shadow-lg w-full">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">Player: {player.name}</DialogTitle>
                </DialogHeader>

                <DialogDescription></DialogDescription>

                <div className="grid grid-cols-2 gap-4">
                    
                    <div className='flex items-center space-x-4 col-span-2'>
                        <p>Main Character</p>
                        <img className="w-8 h-fit" src="assets/images/stock_icons/chara_2_brave_00.png" alt="" />
                        {/* <p>{ getMainCharacter().name }</p> */}
                    </div>

                    <div className="grid grid-cols-2">
                        <p>Wins</p>
                        <p>{ player.wins }</p>

                        <p>Loses</p>
                        <p>{ player.loses }</p>
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
