import AppLayout from '@/layouts/app-layout';
import { Player, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead,TableHeader, TableRow } from "@/components/ui/table";
import { Check, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import DialogPlayerInfo from '@/components/dialogs/player/info';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Spelers',
        href: '/spelers',
    },
];

export default function Index({ players }: { players: Player[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Spelers" />

            <div className="h-full w-full rounded-xl px-8 py-4 overflow-x-auto">
                <Card>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Placing</TableHead>
                                    <TableHead>Main</TableHead>
                                    <TableHead>SPR</TableHead>
                                    <TableHead>Active</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {Array.isArray(players) &&
                                    players.sort( (a, b) => (a.rank - b.rank)).map((player) => (
                                        <TableRow key={ player.id }>
                                            <TableCell>
                                                <DialogPlayerInfo player={ player }></DialogPlayerInfo>
                                            </TableCell>
                                            <TableCell>{ player.rank }</TableCell>
                                            <TableCell>{ player.is_spr ? <Check className="text-green-500 font-bold" /> : <X className="text-red-500 font-bold" /> }</TableCell>
                                            <TableCell>{ player.active ? <Check className="text-green-500 font-bold" /> : <X className="text-red-500 font-bold" /> }</TableCell>
                                            <TableCell className="flex gap-2 items-center justify-end mr-4">
                                                
                                            </TableCell>
                                        </TableRow>
                                    ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}