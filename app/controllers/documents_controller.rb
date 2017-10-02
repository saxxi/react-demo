class DocumentsController < ApplicationControllerApi

  # before_action :authenticate!
  before_action :find_resource, only: [:show, :update, :destroy]

  def index
    page_size = params[:page_size] || 10
    page_size = [[page_size.to_i, 1].max, 500].min

    page_number = params[:page_number] || 1
    page_number = [page_number.to_i, 1].max

    @documents = Document.order(:name).page(page_number).per(page_size)
    @total_pages = @documents.total_pages
    @total_count = @documents.total_count
  end

  def create
    @document = Document.new(document_params)
    @document.save
    render json: @document.to_builder.attributes!
  end

  def show
    render json: @document.to_builder.attributes!
  end

  def update
    @document.update(document_params)
    render json: @document.to_builder.attributes!
  end

  def destroy
    @document.destroy
    render json: { success: true }
  end

  private

  def find_resource
    @document = Document.find(params[:id])
  end

  def document_params
    params.require(:document).permit(:name)
  end

end
