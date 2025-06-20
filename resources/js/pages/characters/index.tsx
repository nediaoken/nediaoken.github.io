import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { Character, Franchise, type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { Edit2 } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Characters',
        href: '/Characters',
    },
];

export default function Index({ characters, franchises }: { characters: Character[]; franchises: Franchise[] }) {
    const [activeCharacterId, setActiveCharacterId] = useState<number | null>(null);
    const [editCharacterOpen, setEditCharacterOpen] = useState<boolean>(false);

    const { data, setData, errors } = useForm({
        id: 0,
        name: '',
        franchise_id: 0,
    });

    const handleSubmit = () => {};

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Characters" />

            <div className="h-full w-full overflow-x-auto rounded-xl px-8 py-4">
                <Card>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Franchise</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {Array.isArray(characters) &&
                                    characters.map((character) => (
                                        <Dialog open={editCharacterOpen && activeCharacterId === character.id} onOpenChange={setEditCharacterOpen}>
                                            <TableRow key={character.id}>
                                                <TableCell>
                                                    <DialogTrigger
                                                        asChild
                                                        onClick={() => {
                                                            setActiveCharacterId(character.id);
                                                            setData({
                                                                id: character.id,
                                                                name: character.name,
                                                                franchise_id: character.franchise_id,
                                                            });
                                                        }}
                                                    >
                                                        <p className="cursor-pointer">{character.name}</p>
                                                    </DialogTrigger>
                                                </TableCell>
                                                <TableCell>{character.franchise_id}</TableCell>
                                                <TableCell className="mr-4 flex items-center justify-end gap-2">
                                                    <DialogTrigger asChild>
                                                        <Edit2
                                                            className="size-5 cursor-pointer"
                                                            onClick={() => {
                                                                setData(character);
                                                                setActiveCharacterId(character.id);
                                                            }}
                                                        />
                                                    </DialogTrigger>
                                                    {/* <DeleteDialog routeName="admin.users.destroy" model={user} /> */}
                                                </TableCell>
                                            </TableRow>

                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Character edit</DialogTitle>

                                                    <DialogDescription>Change the character data.</DialogDescription>
                                                </DialogHeader>

                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                    <div className="grid grid-cols-4 items-center gap-4">
                                                        <Label htmlFor="name" className="text-right">
                                                            Name
                                                        </Label>
                                                        <Input
                                                            id="name"
                                                            value={data.name}
                                                            onChange={(e) => setData('name', e.target.value)}
                                                            className="col-span-3"
                                                        />
                                                    </div>

                                                    <div className="grid grid-cols-4 items-center gap-4">        
                                                        <Label htmlFor="board_id" className='text-right'>Franchise</Label>

                                                        <Select onValueChange={(value) => setData('franchise_id', Number(value))} value={ data.franchise_id.toString() }>
                                                            <SelectTrigger className="col-span-3">
                                                                <SelectValue placeholder="Selecteer een bord" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectGroup>
                                                                    <SelectLabel>Franchise</SelectLabel>

                                                                    {franchises.map((franchise) => (
                                                                        <SelectItem key={franchise.id} value={franchise.id.toString()}>
                                                                            {franchise.name}
                                                                        </SelectItem>
                                                                    ))}
                                                                </SelectGroup>
                                                            </SelectContent>
                                                        </Select>
                                                        <InputError message={ errors.franchise_id } />
                                                    </div>

                                                    <DialogFooter>
                                                        <DialogClose asChild>
                                                            <Button type="button" variant="ghost">
                                                                Annuleren
                                                            </Button>
                                                        </DialogClose>
                                                        <Button type="submit">Opslaan</Button>
                                                    </DialogFooter>
                                                </form>
                                            </DialogContent>
                                        </Dialog>
                                    ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
