<script lang="ts">
	import { Table } from '$lib';
</script>

<Table compact>
	<!-- head -->
	<thead>
		<Table.Row>
			<th />
			<th>Name</th>
			<th>Job</th>
			<th>Favorite Color</th>
		</Table.Row>
	</thead>
	<tbody>
		<!-- row 1 -->
		<Table.Row hover>
			<th>1</th>
			<td>Cy Ganderton</td>
			<td>Quality Control Specialist</td>
			<td>Blue</td>
		</Table.Row>
		<!-- row 2 -->
		<Table.Row>
			<th>2</th>
			<td>Hart Hagerty</td>
			<td>Desktop Support Technician</td>
			<td>Purple</td>
		</Table.Row>
		<!-- row 3 -->
		<Table.Row>
			<th>3</th>
			<td>Brice Swyre</td>
			<td>Tax Accountant</td>
			<td>Red</td>
		</Table.Row>
	</tbody>
</Table>
