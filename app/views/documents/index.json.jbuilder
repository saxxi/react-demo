json.meta do
  json.page_count @page_count
end
json.documents @documents, :id, :name
