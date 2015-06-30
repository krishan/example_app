class Image < Obj
  attribute :blob, :binary
  attribute :widgets, :widgetlist

  def menu_title
    self[:title].presence || name
  end
end
