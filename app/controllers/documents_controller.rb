class DocumentsController < ApplicationControllerApi

  # before_action :authenticate!

  def index
    page_size = params[:page_size] || 10
    page_size = [[page_size.to_i, 1].max, 500].min

    page_number = params[:page_number] || 1
    page_number = [page_number.to_i, 1].max

    @documents = Document.page(page_number).per(page_size)
    @total_pages = @documents.total_pages
    @total_count = @documents.total_count
  end

  def show
    @document = Document.find(params[:id])
    render json: @document.to_builder.attributes!
  end

end
