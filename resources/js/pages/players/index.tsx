import AppLayout from '@/layouts/app-layout';
import { Player, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Table, TableBody, TableCell, TableHead,TableHeader, TableRow } from "@/components/ui/table";
import { Check, EllipsisVertical, Plus, Search, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import DialogPlayerInfo from '@/components/dialogs/player/info';
import { useState } from 'react';
import { Input } from '@/components/ui/input';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Spelers',
        href: '/spelers',
    },
];

export default function Index({ players }: { players: Player[] }) {
    // const [ openEditPlayer, setOpenEditPlayer ] = useState<boolean>(false);
    // const [ openDropdown, setOpenDropdown ] = useState<boolean>(false);
    // const [ openDeletePlayer, setOpenDeletePlayer ] = useState<boolean>(false);
    // const [activePlayerId, setActivePlayerId] = useState<number | null>(null);

    const [ search, setSearch] = useState("");
    const [ filteredPlayers, setFileredPlayers] = useState(players);

    const handleSearch = () => {
        // e.preventDefault();
        setFileredPlayers(players)

        const filtered = players.filter( ( player ) => {
            const name = player.username?.toLowerCase();

            return name.match(search.toLowerCase())
            // console.log(name.match(search.toLowerCase()))
            // return name.startsWith(search.toLowerCase() ) || name.endsWith(search.toLowerCase())
        })

        // console.log(filtered, search)

        setFileredPlayers(search.length > 0 ? filtered : players)
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Spelers" />

            <section className="p-3 sm:p-5">
                <div className="relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="grid grid-cols-12 my-2 gap-x-4 justify-between">
                        <div className="col-span-10">
                            {/* <div className="flex items-center relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <Search className="w-4 h-4" />
                                </div>

                                <Input type="text" id="simple-search" onChange={(e) => { setSearch(e.target.value); handleSearch(e) } } className="text-sm rounded-lg block w-full pl-10 py-2 bg-gray-700 border-gray-600 text-white" placeholder="Search" required />
                            </div> */}

                            <div className="relative">
                                <Input
                                    id="search"
                                    name="search"
                                    placeholder="Zoeken"
                                    className="pr-10"
                                    value={ search }
                                    onChange={(e) => { setSearch(e.target.value); handleSearch() } }
                                />

                                <div className="absolute inset-y-0 right-0 flex justify-end items-center pr-3 pointer-events-none">
                                    <Search className="text-gray-400" />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className="flex justify-end">
                                <button type="button" className="flex items-center space-x-3 justify-center text-white font-medium rounded-lg text-sm px-4 py-2 border border-white">
                                    <Plus className="w-5 h-5" />
                                    Add product
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <Table className="table-auto">       
                            <TableHeader className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b border-white">
                                <TableRow>
                                    <TableHead scope="col" className="px-4 py-3">Placing</TableHead>
                                    <TableHead scope="col" className="px-4 py-3">Name</TableHead>
                                    <TableHead scope="col" className="px-4 py-3">SPR</TableHead>
                                    <TableHead scope="col" className="px-4 py-3">Active</TableHead>
                                    <TableHead scope="col" className="px-4 py-3">
                                        <span className="sr-only">Actions</span>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {
                                    Array.isArray(filteredPlayers) &&
                                        // filteredPlayers.sort( (a, b) => (a.rank - b.rank)).map((player) => (
                                    filteredPlayers.map((player) => (
                                        <DropdownMenu>
                                            <TableRow key={ player.id } className="border-b dark:border-gray-700">
                                                <TableCell className="px-4 py-3">{ player.rank }</TableCell>
                                                <TableCell className="px-4 py-3">{ player.username }</TableCell>
                                                <TableCell className="px-4 py-3">{ player.is_spr ? <Check className="text-green-500 font-bold" /> : <X className="text-red-500 font-bold" /> }</TableCell>
                                                <TableCell className="px-4 py-3">{ player.active ? <Check className="text-green-500 font-bold" /> : <X className="text-red-500 font-bold" />}</TableCell>

                                                <TableCell className="px-4 py-3 flex items-center justify-end">
                                                    <DialogPlayerInfo player={ player } />
                                                </TableCell>
                                            </TableRow>
                                        </DropdownMenu> 
                                    ))
                                }

                            </TableBody>
                        </Table>
                    </div>
                </div>
            </section>

            <div className="hidden h-full w-full rounded-xl px-8 py-4 overflow-x-auto">
                <Card>
                    <CardContent>
                        <Table className="table-auto">
                            <TableHeader>
                                <TableRow>
                                    <TableHead></TableHead>
                                    <TableHead>Placing</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead>SPR</TableHead>
                                    <TableHead>Active</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {Array.isArray(players) &&
                                    players.sort( (a, b) => (a.rank - b.rank)).map((player) => (
                                        <TableRow key={ player.id }>
                                            <TableCell className="flex gap-2 items-center w-1">
                                                {/* <Options></Options> */}
                                                <DropdownMenu>
                                                    <DropdownMenuTrigger>
                                                        <EllipsisVertical />
                                                    </DropdownMenuTrigger>

                                                    <DropdownMenuContent>
                                                        <DropdownMenuItem>Remove</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>

                                            <TableCell>{ player.rank }</TableCell>

                                            <TableCell>
                                                <DialogPlayerInfo player={ player }></DialogPlayerInfo>
                                            </TableCell>

                                            <TableCell>{ player.is_spr ? <Check className="text-green-500 font-bold" /> : <X className="text-red-500 font-bold" /> }</TableCell>
                                            <TableCell>{ player.active ? <Check className="text-green-500 font-bold" /> : <X className="text-red-500 font-bold" /> }</TableCell>
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