json.meta do
  json.total_pages @total_pages
  json.total_count @total_count
end
json.documents @documents, :id, :name
