import Table__SvelteComponent_, { type TTableProps } from './Table.svelte';
import TableRow__SvelteComponent_, { type TTableRowProps } from './TableRow.svelte';

export type TableProps = TTableProps;
export type TableRowProps = TTableRowProps;

export default Object.assign(Table__SvelteComponent_, {
	Row: TableRow__SvelteComponent_
});
