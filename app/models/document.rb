class Document < ApplicationRecord

  def to_builder
    Jbuilder.new do |document|
      document.(self, :id, :name)
    end
  end

end
