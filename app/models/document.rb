class Document < ApplicationRecord

  def to_builder
    Jbuilder.new do |document|
      document.(self, :name)
    end
  end

end
