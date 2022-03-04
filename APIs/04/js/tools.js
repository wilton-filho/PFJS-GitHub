function clearTable(table) {
    for (var i = table.rows.length; i > 1; i--)
        table.deleteRow(i-1);
}
